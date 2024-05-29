
import './App.css';
import TimeLine from "../src/component/TimeLine";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60 * 5, // 5 minutes
                staleTime: 1000 * 60 * 2, // 2 minutes
            },
        },
    });
  return (
      <QueryClientProvider client={queryClient}>
        <div className="mx-auto max-w-[1000px] mt-10 mb-10">
             <TimeLine/>
        </div>
      </QueryClientProvider>
  );
}

export default App;
