import React from "react"
import Commonnav from "../../components/commonnav"

export default function DetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Commonnav/>
            <main>{children}</main>
        </>
    )
}