import { useEffect } from "react"

const useOnClickOutside = (ref,handler) => {
    useEffect(() =>{
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler(event);
        };

        document.addEventListener("touchstart", listener);
        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("touchstart", listener);
            document.removeEventListener("mousedown", listener);
        }
    }, [ref,handler]);
};

export default useOnClickOutside