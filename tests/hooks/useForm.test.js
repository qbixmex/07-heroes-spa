import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('Tests on useForm hook', () => {

  const initialState = {
    name: 'John Doe',
    email: 'johndoe@domain.com',
    password: '0123456789'
  };

  test('should return default values', () => {

    const { result } = renderHook(() => useForm(initialState));

    expect(result.current).toEqual({
      name: initialState.name,
      email: initialState.email,
      password: initialState.password,
      formState: initialState,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    });

  });

  test('should change name from form', () => {

    const newName = 'Daniel';

    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'name', value: newName } });
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);

  });

  test('should change email from form', () => {

    const newEmail = 'daniel456@domain.com';

    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'email', value: newEmail } });
    });

    expect(result.current.email).toBe(newEmail);
    expect(result.current.formState.email).toBe(newEmail);

  });

  test('should change password from form', () => {

    const newPassword = 'f94&5y#p';

    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: 'password', value: newPassword } });
    });

    expect(result.current.password).toBe(newPassword);
    expect(result.current.formState.password).toBe(newPassword);

  });

  test('Should reset form', () => {
    const newUser = {
      name: 'Daniel',
      email: 'daniel456@domain.com',
      password: 'f94&5y#p'
    };

    const { result } = renderHook(() => useForm(initialState));
    const { onResetForm } = result.current;

    act(() => {
      result.current.onInputChange({ target: { name: 'name', value: newUser.name } });
    });

    act(() => {
      result.current.onInputChange({ target: { name: 'email', value: newUser.email } });
    });

    act(() => {
      result.current.onInputChange({ target: { name: 'password', value: newUser.password } });
    });

    expect(result.current.formState).toEqual(newUser);

    act(() => onResetForm());

    expect(result.current.formState).toEqual(initialState);

  });
});
