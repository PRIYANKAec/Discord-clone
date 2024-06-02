"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { EditServerModal } from "@/components/modals/edit-server-modal"
import { InviteModal } from "@/components/modals/invite-modal";

export const ModalProvider = () => {
    const [isMoundted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMoundted){
        return null;
    }
    
    return(
        <>
        <CreateServerModal/>
        <InviteModal/>
        <EditServerModal />
        </>
    )
}