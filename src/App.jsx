import {Toaster} from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0f172a", // dark slate
              color: "#fff",
            },
          }}
      />
    </>
  )
}

export default App