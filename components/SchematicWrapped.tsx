"use client";

import { useUser } from "@clerk/nextjs";
import { useSchematicEvents } from "@schematichq/schematic-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SchematicWrapped({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { identify } = useSchematicEvents();
  const { user } = useUser();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const userName =
      user?.username ??
      user?.fullName ??
      user?.emailAddresses[0]?.emailAddress ??
      user?.id;

    if (user?.id) {
      identify({
        // Company level key
        company: {
          keys: {
            id: user.id,
          },
          name: userName,
        },

        // User level key
        keys: {
          id: user.id,
        },
        name: userName,
      });
    }

    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [user, identify]);

  return <div ref={wrapperRef}>{children}</div>;
}
