import { State } from '@/app/lib/actions';

type ErrorViewProps = {
  errors?: State['errors'];
  name: keyof NonNullable<State['errors']>;
  id?: string;
};

export const ErrorView = ({ errors, name, id }: ErrorViewProps) => {
  return (
    <div id={id ?? `${name}-errors`} aria-live="polite" aria-atomic="true">
      {errors?.[name] &&
        errors?.[name]?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
};
