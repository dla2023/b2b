"use client";

export const shallowUrlUpdate = (url: string) =>
  window.history.replaceState(
    { ...window.history.state, as: url, url: url },
    "",
    url,
  );
