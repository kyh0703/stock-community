export interface SignupRequest {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface SignupResponse {
  id: number;
  email: string;
  username: string;
  password: string;
}

export const signupUser = createAsyncThunk<
  AuthSignupResponse,
  AuthSignupRequest,
  {
    rejectValue: ValidationErrors;
  }
>('auth/signup', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post<AuthSignupResponse>(
      `/api/auth/signup`,
      params,
    );
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
