import type { ReactElement } from 'react';

import { AuthTermsBase } from '~/components/auth/styled';
import Header from '~/components/header';

const Location = () => {
  return (
    <AuthTermsBase>
      {`위치기반서비스 이용약관에 동의하시면, 위치를 활용한 날씨 정보, 가까운 등산로 등을 포함하는 고고(GOGO) 위치기반 서비스를 이용할 수 있습니다. 

선택적 접근권한 항목은 사용자가 선택에 따라 접근 권한을 동의하지 않을 수 있으며, 사용자가 동의하지 않더라도 앱을 이용할 수 있습니다. 
      
접근권한 설정안내: 내정보 > 내정보수정 > 위치정보동의 `}
    </AuthTermsBase>
  );
};

export default Location;

Location.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header title="위치정보 이용 동의" />
      {page}
    </>
  );
};
