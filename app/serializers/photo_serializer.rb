class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :category, :created_at, :comments, :likes

  has_many :comments
end
