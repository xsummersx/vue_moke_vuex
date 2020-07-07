export default{
  memberInfo(state){
    switch(state.userStatus){
      case 0:
        return '普通会员';
      case 1:
        return 'vip会员';
      default:
        return '高级VVVVVIP会员';
    }
  }
}