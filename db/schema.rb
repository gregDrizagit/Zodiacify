# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180123190548) do

  create_table "compatibilities", force: :cascade do |t|
    t.integer "eastern_id"
    t.integer "eastern_partner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "easterns", force: :cascade do |t|
    t.string "sign"
    t.text "description"
    t.string "lucky_number"
    t.string "lucky_color"
    t.string "img_url"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.datetime "birthdate"
    t.string "password_digest"
  end

  create_table "westerns", force: :cascade do |t|
    t.string "sign"
    t.string "element"
    t.string "quality"
    t.string "planet"
    t.integer "user_id"
    t.string "img_url"
    t.string "description"
    t.string "horoscope"
  end

end
