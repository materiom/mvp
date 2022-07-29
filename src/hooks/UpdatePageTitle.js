// Dependencies
import { useEffect } from "react";

const useUpdateTitle = (title) => {
  useEffect(() => {
    // This will run when the page first loads
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpdateTitle;
