import BN from 'bn.js';
import assert from 'assert';
import Decimal from 'decimal.js';

export class Numberu8 extends BN {
    toBuffer(): Buffer {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 1) {
            return b;
        }
        if (b.length >= 1) {
            throw new Error('Numberu16 too large');
        }
        const zeroPad = Buffer.alloc(1);
        b.copy(zeroPad);
        return zeroPad;
    }

    static fromBuffer(buffer) {
        if (buffer.length !== 1) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new BN(
            [...buffer]
                .reverse()
                .map((i) => `00${i.toString(4)}`.slice(-2))
                .join(''),
            16,
        );
    }
}

export class Numberu16 extends BN {
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 2) {
            return b;
        }
        if (b.length >= 2) {
            throw new Error('Numberu16 too large');
        }
        const zeroPad = Buffer.alloc(2);
        b.copy(zeroPad);
        return zeroPad;
    }

    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 2) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new BN(
            [...buffer]
                .reverse()
                .map((i) => `00${i.toString(16)}`.slice(-2))
                .join(''),
            16,
        );
    }
}

export class Numberu32 extends BN {
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 4) {
            return b;
        }
        if (b.length >= 4) {
            throw new Error('Numberu32 too large');
        }
        const zeroPad = Buffer.alloc(4);
        b.copy(zeroPad);
        return zeroPad;
    }

    /**
     * Construct a Numberu32 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 4) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new BN(
            [...buffer]
                .reverse()
                .map((i) => `00${i.toString(16)}`.slice(-2))
                .join(''),
            16,
        );
    }
}

export class Numberu64 extends BN {
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        if (b.length >= 8) {
            throw new Error('Numberu64 too large');
        }
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }

    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        if (buffer.length !== 8) {
            throw new Error(`Invalid buffer length: ${buffer.length}`);
        }
        return new BN(
            [...buffer]
                .reverse()
                .map((i) => `00${i.toString(16)}`.slice(-2))
                .join(''),
            16,
        );
    }
}

export class Numberu128 extends BN {
    toBuffer(): Buffer {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 16) {
            return b;
        }
        assert(b.length < 16, 'Numberu128 too large');

        const zeroPad = Buffer.alloc(16, 0);
        b.copy(zeroPad);
        return zeroPad;
    }

    static fromBuffer(buffer: Buffer): Numberu128 {
        assert(buffer.length === 16, `Invalid buffer length: ${buffer.length}`);
        return new Numberu128(
            [...buffer]
                .reverse()
                .map((i) => `00${i.toString(16)}`.slice(-2))
                .join(''),
            16,
        );
    }
}

export function decimalToBN(n: Decimal): BN {
    return new BN(n.toString());
}

export function bnToDecimal(n: BN) {
    return new Decimal(n.toString());
}

export function uiToNative(ui: Decimal, decimals: number): Decimal {
    return ui.mul(new Decimal(10).pow(new Decimal(decimals)));
}

export function nativeToUi(native: Decimal, decimals: number): Decimal {
    return native.div(new Decimal(10).pow(new Decimal(decimals)));
}

export function booleanToBN(b: boolean): BN {
    return b ? new BN(1) : new BN(0);
}
