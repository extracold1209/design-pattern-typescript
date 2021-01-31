/*
 * implementation, 구현부
 */
export interface IUserService {
    login(): void;

    logout(): void;
}

/*
 * abstraction, 추상층
 */
export interface IUserController {
    requestLogin(): void;

    requestLogout(): void;
}

export class UserServiceImpl implements IUserService {
    login(): void {
        console.log('로그인 되었습니다');
    }

    logout(): void {
        console.log('로그아웃 되었습니다');
    }
}

export class UserControllerImpl implements IUserController {
    private userService: IUserService;
    private isLoggedIn: boolean;

    constructor(userService: IUserService) {
        this.userService = userService; // as @Autowired in java spring
    }

    // high-level i.e. Abstraction specific
    requestLogin() {
        if (this.isLoggedIn) {
            console.log('이미 로그인되어 있습니다');
        } else {
            this.userService.login();
        }
    }

    // low-level i.e. Implementation specific
    requestLogout() {
        this.userService.logout();
    }
}
