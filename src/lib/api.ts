import { AxiosError } from 'axios';
import client from './client';
import { getCookie } from '@/util/cookieFn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config';
import { memo } from 'react';
const token = getCookie('token');

// interface Login {
//   user: {
//     id: string;
//     email: string;
//     name: string;
//     phone_number: string;
//     gender: string;
//     birth_date: string;
//     agree_terms_of_service: boolean;
//   };
//   message: string;
//   token: {
//     access: string;
//     refresh: string;
//   };
// }
// 로그인 요청을 보내는 함수
// export const login = async (email: string, password: string) => {
//   try {
//     const res: Login = await client('/member/login', {
//       method: 'post',
//       data: {
//         email,
//         password,
//       },
//     });
//     if (res !== undefined) {
//       return res;
//     }
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       toast.error('로그인 실패!');
//       return {
//         data: error?.response?.data,
//       };
//     }
//   }
// };
export interface APIBody {
  success: boolean;
  message: string;
  data: {
    username:string;
    token:string;
  }
}
export const login = async(email:string, passwords:string) => {
  const form = {email:email, passwords:passwords}
  const formData:string = JSON.stringify(form)
  const response = await fetch(`${API_URL}/member/login`, {
    method:"POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: formData
  })
  const responseData:APIBody = await response.json()
  return responseData
}
export const logout = async (email: string, passwords: string) => {
  try {
    const form = {email:email, passwords:passwords}
    const formData:string = JSON.stringify(form)
    const response = await fetch(`${API_URL}/member/logout`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: formData
    })

    const responseData:APIBody = await response.json()
    return responseData

  } catch (error) {
    return {
      success: "fail",
      message: error,
    }
  }
};
// 다른 API 요청들을 필요에 따라 추가할 수 있습니다.
// 예를 들어 회원 가입, 로그아웃, 사용자 정보 조회 등의 기능을 추가할 수 있습니다.
export const signup = async (
  email: string,
  password: string,
  name: string,
  phone_number: string,
  gender: string,
  birth_date: string,
  agree_terms_of_service: boolean,
) => {
  try {
    const res = await client('/api/user/signup/', {
      method: 'post',
      data: {
        email,
        password,
        name,
        phone_number,
        gender,
        birth_date,
        agree_terms_of_service,
      },
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const profile = async (id: string) => {
  try {
    const res = await client('/api/user/profile/', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { id },
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const modifyCheeringTeam = async (
  id: string,
  nickname: string,
  cheering_team: number,
) => {
  try {
    const res = await client('/api/user/profile/', {
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id,
        nickname,
        cheering_team,
      },
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const getTeamDetail = async () => {
  try {
    const res = await client('/api/teaminfo/listdetail', {
      method: 'get',
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const getAllAccompany = async (id: string) => {
  try {
    const res = await client(`/api/recruitments/`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { id },
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const getMyAccompany = async (userId: number) => {
  try {
    const res = await client(`/api/myaccompany/${userId}`, {
      method: 'get',
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const getMyAccompany2 = async (userId: number) => {
  try {
    const res = await client(`/api/myaccompanyapply/${userId}`, {
      method: 'get',
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
export const getAccompanyDetail = async (postId: string) => {
  try {
    const res = await client(`/api/findaccompany/detail/${postId}`, {
      method: 'get',
    });
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        data: error?.response?.data,
      };
    }
  }
};
