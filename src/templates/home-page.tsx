import { sql } from "../utils/db.js";
import { Code } from "bright";

const code = `const HomePage = async () => {
  const list = await sql\`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12\`
  
  return (
    list.map((row: any) => {
      return (
        <li>
          <img
            alt={row.name}
            width={96}
            height={96}
            src={\`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\${row.id}.png\`}
          />
          {row.name}
        </li>
      )
    })
  )
;
`;

export const HomePage = async () => {
  const list = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;

  return (
    <div className="flex flex-col items-center">
      <div>refresh page to see random pokemon</div>
      <ul className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {list.map((row: any) => {
          return (
            <li
              key={row.id}
              className="inline-flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3"
            >
              <img
                alt={row.name}
                width={96}
                height={96}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.id}.png`}
              />
              {row.name}
            </li>
          );
        })}
      </ul>
      <Code lang="ts" className="hidden md:block">
        {code}
      </Code>
    </div>
  );
};
