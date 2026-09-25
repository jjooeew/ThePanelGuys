import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { PROJECTS } from "../app/constants.ts";

test("existing project URLs keep their unique IDs", () => {
  const ids = PROJECTS.map((project) => project.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of [1, 2, 3, 4, 5, 6, 7]) assert.ok(ids.includes(id));
  for (const id of ids) assert.ok(Number.isSafeInteger(id) && id > 0);
});

test("each project has complete copy and a cover in its gallery", () => {
  for (const project of PROJECTS) {
    for (const key of ["title", "category", "location", "description"]) {
      assert.ok(project[key].trim(), `${project.id}: missing ${key}`);
    }
    assert.ok(project.gallery.includes(project.image), `${project.title}: cover missing from gallery`);
    assert.equal(new Set(project.gallery).size, project.gallery.length);
  }
});

test("every referenced project photograph exists in the hosted public assets", async () => {
  for (const project of PROJECTS) {
    for (const src of project.gallery) {
      assert.match(src, /^\/images\/[A-Za-z0-9-]+\/[A-Za-z0-9-]+\.(jpg|png|webp)$/);
      await access(new URL(`../public${src}`, import.meta.url));
    }
  }
});
