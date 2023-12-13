import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";
import { KanaContextProvider } from "../../logic/context/KanaContext";
import { GradeContextProvider } from "../../logic/context/GradeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function ContextWrapper({ children }) {
  return (
    <UserContextProvider>
      <KanaContextProvider>
        <QuestionContextProvider>
          <GradeContextProvider>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools />
              {children}
            </QueryClientProvider>
          </GradeContextProvider>
        </QuestionContextProvider>
      </KanaContextProvider>
    </UserContextProvider>
  );
}

export default ContextWrapper;
