const PossibleEntries: string[] = ["O", "G", "R", "Y", "P"]

export function generateSecretCode(secretCodeSize: number): string[] {
  let secretCode = Array<string>(secretCodeSize);

  for (let i = 0; i < secretCodeSize; i++) {
    secretCode[i] = PossibleEntries[Math.floor(Math.random() * PossibleEntries.length)];
  }

  return secretCode;
}

export function validateInput(entry: string[], secretCodeSize: number): boolean {
  if (entry.length != secretCodeSize) {
    // TODO: return error
    return false;
  }

  for (let i = 0; i < entry.length; i++) {
    if (!isValidCharacter(entry[i])) {
      // TODO: return error
      return false;
    }
  }

  return true;
}

function isValidCharacter(entry: string): boolean {
  return PossibleEntries.includes(entry)
}
