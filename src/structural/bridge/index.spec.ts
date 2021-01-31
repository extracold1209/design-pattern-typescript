import {IUserController, IUserService, UserControllerImpl, UserServiceImpl} from './index';


test('BridgePattern', () => {
    const userServiceImpl: IUserService = new UserServiceImpl();
    const userController: IUserController = new UserControllerImpl(userServiceImpl);

    userController.requestLogin();
    userController.requestLogin(); // 로그인은 추상부인 컨트롤러에서 먼저 로직이 가해진다
    userController.requestLogout(); // 로그아웃은 구현부의 로직을 그대로 따른다
});
