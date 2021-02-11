import Singleton from './index';

test('SingletonPattern', () => {
    const s2 = new Singleton();
    const s1 = Singleton.getInstance();
    const s3 = new Singleton();
    const s4 = Singleton.getInstance();

    expect(s1.createdAt).toEqual(s2.createdAt);
    expect(s2.createdAt).toEqual(s3.createdAt);
    expect(s3.createdAt).toEqual(s4.createdAt);
    expect(s4.createdAt).toEqual(s1.createdAt);
    expect(s1 === s2).toBeTruthy();
    expect(s2 === s3).toBeTruthy();
    expect(s3 === s4).toBeTruthy();
    expect(s4 === s1).toBeTruthy();
});
