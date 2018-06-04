export class ClassicSingleton {

    private static instance: ClassicSingleton = null;

    protected constructor() {
        // Exists only to defeat instantiation.
    }

    public static getInstance(): ClassicSingleton {
        if (this.instance === null) {
            this.instance = new ClassicSingleton();
        }
        return this.instance;
    }

}