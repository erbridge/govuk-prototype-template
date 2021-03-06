import { goto, stores } from "@sapper/app";
import type { Writable } from "svelte/store";

export type Session<
  NS extends string,
  N extends string = string,
  V = string
> = {
  [namespace in NS]?: {
    [name in N]?: V;
  };
};

export function clearSession<S extends Session<NS>, NS extends string>(
  namespace: NS
) {
  const { session } = stores() as { session: Writable<S> };

  session.update((sess) => ({
    ...sess,
    [namespace]: {},
  }));
}

export function attachToSession<S extends Session<NS>, NS extends string>(
  namespace: NS
) {
  type NSSession = S[NS];

  let sessionValue: NSSession | undefined;

  const { session } = stores() as { session: Writable<S> };

  function reset() {
    session.update((sess) => ({
      ...sess,
      [namespace]: {},
    }));
  }

  session.subscribe((sess) => {
    sessionValue = sess ? sess[namespace] : undefined;

    if (sessionValue === undefined) {
      reset();
    }
  });

  function handleFormSubmit(
    name: keyof NSSession,
    next: string | ((value: NSSession[keyof NSSession]) => string)
  ) {
    return async function handleSubmit(event: Event) {
      const { value } = (event.target as HTMLFormElement).elements[
        name as string
      ];

      session.update((sess) => ({
        ...sess,
        [namespace]: {
          ...sess[namespace],
          [name]: value,
        },
      }));

      const href = typeof next === "function" ? next(value) : next;

      await goto(href);
    };
  }

  return { value: sessionValue, handleFormSubmit, reset };
}
