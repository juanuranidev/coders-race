import {
  pythonCodesSeed,
  javaScriptCodesSeed,
  typeScriptCodesSeed,
} from "@code/infrastructure/dbs/postgres/seed/code.seed";
import {
  codes,
  languages,
} from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { eq } from "drizzle-orm";
import { dbClient } from "../client/postgres.client";
import { languagesSeed } from "@language/infrastructure/dbs/postgres/seed/language.seed";

const createLanguages = async (tx: typeof dbClient = dbClient) => {
  try {
    for (const language of languagesSeed) {
      const [languageExist] = await tx
        .select()
        .from(languages)
        .where(eq(languages.name, language.name));

      if (!languageExist) {
        await tx.insert(languages).values(language);
      }
    }
    console.log("Languages created successfully 🚀");
  } catch (error) {
    throw `Error creating languages. ${error} 🚫`;
  }
};

async function createJavaScriptCodes(tx: typeof dbClient = dbClient) {
  try {
    for (const code of javaScriptCodesSeed) {
      const [javascriptLanguage] = await tx
        .select()
        .from(languages)
        .where(eq(languages.name, "JavaScript"));

      const [codeExist] = await tx
        .select()
        .from(codes)
        .where(eq(codes.text, code));

      if (!codeExist) {
        await tx
          .insert(codes)
          .values({ language: javascriptLanguage.id, text: code });
      }
    }
    console.log("JavaScript codes created successfully 🚀");
  } catch (error) {
    throw `Error creating JavaScript codes. ${error} 🚫`;
  }
}

async function createTypeScriptCodes(tx: typeof dbClient = dbClient) {
  try {
    for (const code of typeScriptCodesSeed) {
      const [typeScriptLanguage] = await tx
        .select()
        .from(languages)
        .where(eq(languages.name, "TypeScript"));

      const [codeExist] = await tx
        .select()
        .from(codes)
        .where(eq(codes.text, code));

      if (!codeExist) {
        await tx
          .insert(codes)
          .values({ language: typeScriptLanguage.id, text: code });
      }
    }
    console.log("TypeScript codes created successfully 🚀");
  } catch (error) {
    throw `Error creating TypeScript codes. ${error} 🚫`;
  }
}

async function createPythonCodes(tx: typeof dbClient = dbClient) {
  try {
    for (const code of pythonCodesSeed) {
      const [pythonLanguage] = await tx
        .select()
        .from(languages)
        .where(eq(languages.name, "Python"));

      const [codeExist] = await tx
        .select()
        .from(codes)
        .where(eq(codes.text, code));

      if (!codeExist) {
        await tx
          .insert(codes)
          .values({ language: pythonLanguage.id, text: code });
      }
    }
    console.log("Python codes created successfully 🚀");
  } catch (error) {
    throw `Error creating Python codes. ${error} 🚫`;
  }
}

(async () => {
  await dbClient.transaction(async (tx: typeof dbClient) => {
    await createLanguages(tx);
    await createJavaScriptCodes(tx);
    await createTypeScriptCodes(tx);
    await createPythonCodes(tx);
    console.log("Seed executed successfully 🚀");
  });
  process.exit();
})();
