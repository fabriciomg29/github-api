import React from 'react';
import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/60270214?v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Fabrcio Goulart</h1>
          <S.WrapperUserName>
            <h3>Username:</h3>
            <span>fabriciomg29</span>
          </S.WrapperUserName>
        </div>  
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>2</span>
          </div>
          <div>
            <h4>Folowings</h4>
            <span>15</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile;