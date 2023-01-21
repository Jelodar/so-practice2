export const sortByDate = (a: any, b: any) => {
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
};

export const createFilter =
  (fieldName: string) => (fieldValue: string) => (repo: any) => {
    return fieldValue === '' || repo[fieldName] === fieldValue;
  };

export const getLanguages = (repos: any[]) => {
  if (!repos.length) {
    return [];
  }
  return repos.reduce((languages: string[], repo) => {
    if (repo.language && !languages.includes(repo.language)) {
      languages.push(repo.language);
    }
    return languages;
  }, []);
};
