import { expect } from 'chai';
import { ClassicSingleton } from './classic-singleton';

describe('TEST: Singleton class', () => {
    it('should return a counter equal to one (1)', () => {
        const classicSingleton = ClassicSingleton.getInstance();
        const classicSingleton1 = ClassicSingleton.getInstance();
        expect(classicSingleton1.getCounter()).to.equal(1);
    });
    it('should not return a counter different to one (1)', () => {
        const classicSingleton = ClassicSingleton.getInstance();
        const classicSingleton1 = ClassicSingleton.getInstance();
        expect(classicSingleton1.getCounter()).to.not.equal(2);
    });
});