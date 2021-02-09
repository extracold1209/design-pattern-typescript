import Singleton from './index';

test('SingletonPattern', () => {
    const s2 = new Singleton();
    const s1 = Singleton.getInstance();
    const s3 = Singleton.getInstance();
    const s4 = Singleton.getInstance();

    expect(s1.createdAt).toEqual(s2.createdAt);
    expect(s2.createdAt).toEqual(s3.createdAt);
    expect(s3.createdAt).toEqual(s4.createdAt);
    expect(s4.createdAt).toEqual(s1.createdAt);
});
