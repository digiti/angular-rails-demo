module API
  module V1
    class Articles < Grape::API
      include API::V1::Defaults

      resource :articles do
        desc "Return all articles"
        get "" do
          Article.all
        end
      end
    end
  end
end
