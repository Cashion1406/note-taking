"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (

        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Just take note. We got you <span className="underline">
                    Cashion
                </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Simplify workspace for better and faster workflow.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents"> Enter Cashion
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>


                </Button>)}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Try Cashion
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
}

export default Heading;