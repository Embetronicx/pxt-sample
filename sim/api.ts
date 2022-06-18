/// <reference path="../libs/core/enums.d.ts"/>

async function delay<T>(duration: number, value: T | Promise<T>): Promise<T>;
async function delay(duration: number): Promise<void>
async function delay<T>(duration: number, value?: T | Promise<T>): Promise<T> {
    // eslint-disable-next-line
    const output = await value;
    await new Promise<void>(resolve => setTimeout(() => resolve(), duration));
    return output;
}


namespace pxsim.test {
    /**
     * Plot the LED Matrix
     */
    //% weight=90
    //% blockId=plot block="plot|x %x|y %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function plot( x : number, y : number ) {
        const position = +("" + x + y);
        return board().sprite.LedOn( position );
    }

    /**
     * unPlot the LED Matrix
     */
    //% weight=90
    //% blockId=unplot block="unplot|x %x|y %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function unplot(  x : number, y : number ) {
        const position = +("" + x + y);
        return board().sprite.LedOff( position );
    }

    /**
     * Plot all the LEDs
     */
    //% weight=90
    //% blockId=plotAll block="plotAll"
    export function plotAll( ) {
        return board().sprite.AllLedOn( );
    }

    /**
     * Unplot all the LEDs
     */
    //% weight=90
    //% blockId=unplotAll block="unplotAll"
    export function unplotAll( ) {
        return board().sprite.AllLedOff( );
    }
}

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return delay(ms)
    }
}


namespace pxsim {
    /**
     * A ghost on the screen.
     */
    //%
    export class Sprite {
        public colour = 'black';
        public position = 0;
        
        constructor() {
        }
        
        private foobar() {}

        /**
         * Single Led On
         */
        //%
        public LedOn(value: number) {
            
            if( value >= 40 ) {
                value -= 20;
            } else if( value >= 30 ) {
                value -= 15;
            } else if( value >= 20 ) {
                value -= 10;
            } else if( value >= 10 ) {
                value -= 5;
            } else {
                //do nothing
            }

            this.position = value;
            this.colour = 'red';

            board().updateView();
        }

        /**
         * Single Led Off
         */
        //%
        public LedOff(value: number) {
            
            if( value >= 40 ) {
                value -= 20;
            } else if( value >= 30 ) {
                value -= 15;
            } else if( value >= 20 ) {
                value -= 10;
            } else if( value >= 10 ) {
                value -= 5;
            } else {
                //do nothing
            }

            this.position = value;
            this.colour = 'black';

            board().updateView();
        }

        /**
         * All LEDs On
         */
        //%
        public AllLedOn() {
            var i:number;

            for(i = 0; i < 45; i++) {       //TODO: Change the 45
                this.LedOn(i);
             }
        }

        /**
         * All LEDs Off
         */
        //%
        public AllLedOff() {
            var i:number;

            for(i = 0; i < 45; i++) {       //TODO: Change the 45
                this.LedOff(i);
             }
        }
        }
    }
}

namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    export function createSprite(): Sprite {
        return new Sprite();
    }
}