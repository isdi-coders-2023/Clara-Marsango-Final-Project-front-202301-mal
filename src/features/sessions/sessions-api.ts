export const createSession = async (sessionInfo: FormData) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/sessions`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Access Token')}`,
      },
      body: sessionInfo,
    },
  );

  return response;
};

export const getAllSessions = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/sessions/explore`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Access Token')}`,
      },
    },
  );

  return response;
};

export const getSessionById = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/sessions/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Access Token')}`,
      },
    },
  );

  return response;
};

export const deleteSessionById = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/sessions/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Access Token')}`,
      },
    },
  );

  return response;
};

export const joinSessionById = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/sessions/${id}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Access Token')}`,
      },
    },
  );

  return response;
};

export const leaveSessionById = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/v1/sessions/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('Access Token')}`,
      },
    },
  );

  return response;
};
