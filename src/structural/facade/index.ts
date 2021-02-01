class CPU {
    freeze() {
        console.log('cpu freeze');
    }

    jump(position: number) {
        console.log('cpu jumped at ', position);
    }

    execute() {
        console.log('cpu command executed');
    }
}

class HardDrive {
    read(lba: number, size: number) {
        console.log('hdd read ', lba, ', size is ', size);
    }
}

class Memory {
    load(position: number, data: number[]) {
        console.log('memory load at ', position, ', data is ', data.join(' '));
    }
}

/**
 * Facade Component
 */
export default class Computer {
    private cpu: CPU = new CPU();
    private memory: Memory = new Memory();
    private hdd: HardDrive = new HardDrive();

    public start() {
        this.cpu.freeze();
        this.memory.load(0, [102, 104, 333]);
        this.cpu.jump(0);
        this.cpu.execute();
    }
}
