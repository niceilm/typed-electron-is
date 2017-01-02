declare module 'electron-is' {
  interface IsStatic {
    renderer(): boolean;
    main(): boolean;
    osx(): boolean;
    macOS(): boolean;
    windows(): boolean;
    linux(): boolean;
    x86(): boolean;
    x64(): boolean;
    production(): boolean;
    dev(): boolean;
    sandbox(): boolean;
    mas(): boolean;
    windowsStore(): boolean;
    all(...args: (() => boolean)[]): boolean;
    none(...args: (() => boolean)[]): boolean;
    one(...args: (() => boolean)[]): boolean;
    release(requested: string): boolean;
    gtRelease(requested: string): boolean;
    ltRelease(requested: string): boolean;
  }
  export = IsStatic;
}