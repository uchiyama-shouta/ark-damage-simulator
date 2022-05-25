export const hiraToKana = (text: string): string =>
  text
    .trim()
    .replace(/[\u3041-\u3096]/g, (match) =>
      String.fromCharCode(match.charCodeAt(0) + 0x60),
    );
