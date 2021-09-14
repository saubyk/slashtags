declare module 'noise-handshake' {
  class Noise {
    constructor(...args);
    initialise: (prologue: Uint8Array, remoteStatic?: Uint8Array) => void;
    recv: (buf: Uint8Array) => Uint8Array;
    send: (payload: Uint8Array) => Uint8Array;
    rs: Buffer;
  }

  export = Noise;
}