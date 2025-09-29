const isAuthenticated = () => {
  return !!localStorage.getItem("token") // 불리언 리턴
  // 참에 가까운 값 not -> false -> not => true
};

export default isAuthenticated