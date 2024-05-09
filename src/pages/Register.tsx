import { Form, Link } from "react-router-dom";
import FormInput from "@/components/FormInput.tsx";
import { Button } from "@/components/ui/button.tsx";

function Register() {
  return (
    <main className={"grid place-items-center h-screen"}>
      <Form className={"bg-accent px-8 py-8 rounded-lg grid gap-y-4 w-96"}>
        <h2 className={"text-center text-2xl"}>Register</h2>{" "}
        <FormInput labelText={"User name"} type={"text"} name={"username"} />
        <FormInput labelText={"Email"} type={"text"} name={"email"} />
        <FormInput labelText={"Password"} type={"password"} name={"password"} />
        <Button type={"submit"}>Login</Button>
        <p className={"text-center"}>
          Already a member?
          <span className={"text-primary font-semibold text-sm ml-2"}>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </Form>
    </main>
  );
}

export default Register;
