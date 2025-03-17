import { Ambulance, Car, CarFront, Cross, PlaneTakeoff } from "lucide-react";

export const ambulanceTypes = [
    {
        _id: "1",
        icon: <Car className="text-primary" size={30} />,
        title: "Ac ambulance service",
        content:
            "The Ac Ambulance is the best to transport a patient a place to another. It is all Districts are available.",
        url: "/ac-ambulance-service",
    },
    {
        _id: "2",
        icon: <Ambulance className="text-primary" size={30} />,
        title: "Non-Ac Ambulance service",
        content:
            "Non-Ac Ambulance is Normal then Ac Ambulacne. it is low price then Ac Ambulance. 24/7 Ambulance is Available.",
        url: "/non-ac-ambulance",
    },
    {
        _id: "3",
        icon: <CarFront className="text-primary" size={30} />,
        title: "Basic Life Support (BLS) Ambulances",
        content:
            "Basic Life Support ambulances are a crucial part of emergency medical services, providing essential care.",
        url: "/icu-ambulance-service",
    },
    {
        _id: "4",
        icon: <Cross className="text-primary" size={30} />,
        title: "Advanced Life Support (ALS) Ambulances",
        content:
            "ALS ambulances are equipped to provide a wider range of medical procedures than BLS ambulances",
        url: "/",
    },
    {
        _id: "5",
        icon: <PlaneTakeoff className="text-primary" size={30} />,
        title: "Freezing Ambulance service",
        content:
            "It is the best way to save or carry the dead body. It has a frozen box. Use this save the dead body.",
        url: "/freezing-ambulance-service",
    },
    {
        _id: "6",
        icon: <Cross className="text-primary" size={30} />,
        title: "Hiace Microbus Service",
        content:
            "Hi-ace Microbus car is available. We provide only Hiace car from Dhaka to all districts.",
        url: "/",
    },
];