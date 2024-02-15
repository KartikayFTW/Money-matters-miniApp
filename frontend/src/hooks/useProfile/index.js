import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdateUserMutation } from "../../api/auth/useUpdateUserMutation";
import useUserDetails from "../useUserDetails";

const useProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { userData } = useUserDetails();
  const { firstName, lastName, email } = userData?.userDetails?.[0] ?? {};

  const updateUserSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    password: z.string().optional(),
  });
  const {
    formState: { isDirty, errors, touchedFields },
    reset,
    handleSubmit,
    register,
    getValues,
    setError,
  } = useForm({
    resolver: zodResolver(updateUserSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const isFormValid = isDirty && Object.keys(errors).length === 0;

  useEffect(() => {
    if (userData) {
      const userDetails = userData.userDetails?.[0] ?? {};
      reset({
        firstName: userDetails.firstName || "",
        lastName: userDetails.lastName || "",
        password: "",
      });
    }
  }, [userData, reset]);

  const { mutateAsync } = useUpdateUserMutation();

  const updateUserDetailsHandler = async (data) => {
    const { password } = getValues();

    if (touchedFields.password && password && password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Password must be at least 6 characters long",
      });
      return;
    }

    const submissionData = { ...data };
    if (!touchedFields.password || !password) {
      delete submissionData.password;
    }

    try {
      const result = await mutateAsync(submissionData);
      if (result && result.msg) {
        setIsEditing(false);
      }
    } catch (error) {
      console.log("update error profile", error);
    }
  };

  const onCancelHandler = () => {
    setIsEditing(false);
    reset();
  };
  return {
    updateUserDetailsHandler,
    isFormValid,
    register,
    isEditing,
    setIsEditing,
    firstName,
    lastName,
    getValues,
    reset,
    userData,
    onCancelHandler,
    email,
    handleSubmit,
    errors,
  };
};
export default useProfile;
