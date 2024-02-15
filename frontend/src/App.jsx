// @ts-nocheck
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext";
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <>
<Toaster
  toastOptions={{
    className: '',
    style: {
      // border: '1px solid #713200',
      // padding: '16px',
      // color: '#713200',
    },
  }}
/>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
 
      <Routes />
     
    </QueryClientProvider>
    </AuthProvider>
    </>
  );
}

export default App;
