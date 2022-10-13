class Photo < ApplicationRecord
    has_many :comments
    validates :name, presence: true
    validates :url, presence: true
    validates :category, inclusion: ["nature","animal","car","building","human","forest"]
    
end
