import getComposite from './index';

test('CompositePattern', function () {
    // 각 HTML 컴포넌트가 모여있는 루트컴포넌트라고 생각해보자.
    const htmlComposite = getComposite();
    const consoleSpy = spyOn(console, 'log');
    let callTimes = 0;

    // 각 값들과 동일한 키를 사용하는 컴포넌트만 render 를 다시 일으킨다고 생각해보자.
    htmlComposite.render(['spanContent']);
    expect(consoleSpy).toHaveBeenCalledTimes(callTimes += 2); // span, checkbox

    htmlComposite.render(['headerTitle', 'noticeText', 'checked']);
    expect(consoleSpy).toHaveBeenCalledTimes(callTimes += 3); // header, textbox, checkbox

    htmlComposite.render(['headerTitle', 'headerTitle', 'headerTitle']);
    expect(consoleSpy).toHaveBeenCalledTimes(callTimes += 1); // header only
});
