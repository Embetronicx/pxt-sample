// Auto-generated from simulator. Do not edit.
declare namespace test {
    /**
     * Plot the LED Matrix
     */
    //% weight=90
    //% blockId=plot block="plot|x %x|y %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% shim=test::plot
    function plot(x: number, y: number): void;

    /**
     * unPlot the LED Matrix
     */
    //% weight=90
    //% blockId=unplot block="unplot|x %x|y %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% shim=test::unplot
    function unplot(x: number, y: number): void;

    /**
     * Plot all the LEDs
     */
    //% weight=90
    //% blockId=plotAll block="plotAll"
    //% shim=test::plotAll
    function plotAll(): void;

    /**
     * Unplot all the LEDs
     */
    //% weight=90
    //% blockId=unplotAll block="unplotAll"
    //% shim=test::unplotAll
    function unplotAll(): void;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
    /**
     * A ghost on the screen.
     */
    //%
    declare class Sprite {
        /**
         * Single Led On
         */
        //%
        //% shim=.LedOn
        public LedOn(value: number): void;

        /**
         * Single Led Off
         */
        //%
        //% shim=.LedOff
        public LedOff(value: number): void;

        /**
         * All LEDs On
         */
        //%
        //% shim=.AllLedOn
        public AllLedOn(): void;

        /**
         * All LEDs Off
         */
        //%
        //% shim=.AllLedOff
        public AllLedOff(): void;

    }
declare namespace sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    //% shim=sprites::createSprite
    function createSprite(): Sprite;

}

// Auto-generated. Do not edit. Really.
