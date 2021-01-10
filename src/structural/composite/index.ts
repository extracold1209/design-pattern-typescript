/**
 * 베이스가 되는 인터페이스.
 * 공통함수인 render 를 가지고 있다.
 * 이 render 를 그냥 실행시키기만 하면 재미없으니 특정 변경값에 해당되는 컴포넌트만 반응하도록 만들어보았다.
 */
export interface Component {
    name: string;
    props?: string[];

    render(changes: string[]): void;
}

/**
 * CompositeComponent 가 된다.
 * 이 컴포넌트는 동일한 인터페이스인 Component 를 자식으로 가질 수 있으며, render 라는 공통 함수를 실행하면
 * 자신이 자식으로 가지고 있는 모든 컴포넌트의 render 를 실행한다.
 */
export class SlotComponent implements Component {
    private slots: Component[] = [];
    name: string;
    props: string[];

    constructor(name: string, props?: string[]) {
        this.name = name;
        this.props = props || [];
    }

    addComponent(component: Component): void {
        this.slots.push(component);
    }

    render(changes: string[]): void {
        if (this.props?.find((prop) => changes.includes(prop))) {
            console.log(`${this.name} is rendered`);
        }
        this.slots.forEach((slot) => {
            slot.render(changes);
        });
    }
}

/**
 * Leaf 노드가 된다.
 * 이 컴포넌트는 더이상 하위 컴포넌트가 존재하지 않는다.
 */
export class TerminalComponent implements Component {
    name: string;
    props: string[];

    constructor(name: string, props?: string[]) {
        this.name = name;
        this.props = props || [];
    }

    render(changes: string[]): void {
        if (this.props?.find((prop) => changes.includes(prop))) {
            console.log(`${this.name} is rendered`);
        }
    }
}


export default function getComposite(): Component {
    const body = new SlotComponent('body');

    const header = new SlotComponent('header', ['headerTitle', 'headerContent']);

    const content = new SlotComponent('div');
    const span = new TerminalComponent('span', ['spanContent']);
    const checkbox = new TerminalComponent('checkbox', ['spanContent', 'checked']);

    const notice = new SlotComponent('noticeDiv', ['noticeStyle']);
    const textbox = new TerminalComponent('noticeText', ['noticeText']);

    body.addComponent(header);
    body.addComponent(content);

    content.addComponent(span);
    content.addComponent(checkbox);

    content.addComponent(notice);
    content.addComponent(textbox);

    return body;
}
