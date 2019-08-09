namespace AppTypes {
  interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}

export interface StringValidator {
  isAcceptable(s: string): boolean;
}
