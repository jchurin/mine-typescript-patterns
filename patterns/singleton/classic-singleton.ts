export class ClassicSingleton {

    private static instance: ClassicSingleton = null;
    private counter: number = 0;

    private constructor() {
        // Exists only to defeat instantiation.
        this.incrementCounter();
    }
    
    public static getInstance(): ClassicSingleton {
        if (this.instance === null) {
            this.instance = new ClassicSingleton();
        }
        return this.instance;
    }
    
    
    /**
     * Getter $counter
     * @return {number }
     */
    public getCounter(): number  {
        return this.counter;
	}
    
    /**
     * Increment $counter
     */
    private incrementCounter() {
		this.counter++;
	}
    

}