import { useEffect } from "react";
import { useState } from "react";


const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("./db.json")
            .then((res) => res.json())
            .then((data) => {
                setMeals(data);
            });
    }, []);


    return [meals];
}

export default useMeals;