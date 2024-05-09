import { Form, Link } from "react-router-dom";
import FormInput from "@/components/FormInput.tsx";
import { Button } from "@/components/ui/button.tsx";

function Login() {
  return (
    <main className={"grid place-items-center h-screen"}>
      <Form className={"bg-accent px-8 py-8 rounded-lg grid gap-y-4 w-96"}>
        <h2 className={"text-center text-2xl"}>Login</h2>
        <FormInput labelText={"Email"} type={"text"} name={"email"} />
        <FormInput labelText={"Password"} type={"password"} name={"password"} />

        <Button type={"submit"}>Login</Button>

        <p className={"text-center"}>
          Not a member yet?{" "}
          <span className={"text-primary font-semibold"}>
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </Form>
    </main>
  );
}

export default Login;
