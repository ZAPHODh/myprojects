import { stacks } from "app/stacks/utils";

export function Stacks() {
  return (
    <div className="flex flex-wrap items-center gap-4 max-w-full">
      {stacks.map((stack) => {
        const stars = Array.from(
          { length: 5 },
          (_, index) => index < stack.proficiency
        );
        return (
          <div
            key={stack.stack}
            className="flex-1 max-w-[90px] max-h-[120px] p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-between"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <title>{stack.stack}</title>
              <path d={stack.path} />
            </svg>
            <div className="flex items-center mt-1">
              {stars.map((filled, index) => (
                <svg
                  key={index}
                  className={`w-3 h-3 ms-1 ${
                    filled
                      ? "text-yellow-700"
                      : "text-gray-300 dark:text-gray-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-sm mt-2">
              {stack.stack}
            </p>
          </div>
        );
      })}
    </div>
  );
}
